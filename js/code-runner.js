/**
 * SPS CODE ORBIT - Safe Client-Side Interactive Code Playground
 */

class SafeCodeRunner {
  constructor() {}

  runPythonSnippet(code) {
    const logs = [];
    const variables = {};

    try {
      const lines = code.split('\n');
      for (let rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;

        // Simple Variable Assignment: score = 50 or score = score + 10
        if (line.includes('=') && !line.startsWith('print') && !line.startsWith('if') && !line.startsWith('while')) {
          const parts = line.split('=');
          const varName = parts[0].trim();
          let expr = parts[1].trim();

          // Evaluate basic math with existing variables
          for (const [k, v] of Object.entries(variables)) {
            const regex = new RegExp(`\\b${k}\\b`, 'g');
            expr = expr.replace(regex, v);
          }

          // Strip string quotes if simple string
          if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
            variables[varName] = expr.slice(1, -1);
          } else {
            // Safe arithmetic evaluation (numbers only)
            if (/^[0-9+\-*/().\s]+$/.test(expr)) {
              // eslint-disable-next-line no-eval
              variables[varName] = Function(`'use strict'; return (${expr})`)();
            } else {
              variables[varName] = expr;
            }
          }
        }

        // Print Statement: print(score) or print("Hello")
        if (line.startsWith('print(') && line.endsWith(')')) {
          let inner = line.slice(6, -1).trim();
          
          if (variables[inner] !== undefined) {
            logs.push(String(variables[inner]));
          } else if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
            logs.push(inner.slice(1, -1));
          } else {
            // Math expression inside print
            for (const [k, v] of Object.entries(variables)) {
              const regex = new RegExp(`\\b${k}\\b`, 'g');
              inner = inner.replace(regex, v);
            }
            if (/^[0-9+\-*/().\s]+$/.test(inner)) {
              logs.push(String(Function(`'use strict'; return (${inner})`)()));
            } else {
              logs.push(inner);
            }
          }
        }
      }

      return {
        success: true,
        output: logs.join('\n'),
        variables: variables
      };
    } catch (err) {
      return {
        success: false,
        error: err.message,
        output: 'Error: ' + err.message
      };
    }
  }

  evaluatePractice(code, expectedOutput) {
    const result = this.runPythonSnippet(code);
    if (!result.success) {
      return {
        passed: false,
        output: result.output,
        message: 'Syntax Error in code.'
      };
    }

    const trimmedOut = (result.output || '').trim();
    const passed = trimmedOut === String(expectedOutput).trim();

    return {
      passed: passed,
      output: trimmedOut || '(No output produced)',
      message: passed
        ? 'Correct! Nice work — your program produced the expected result.'
        : `Not quite. Expected output: "${expectedOutput}", but got "${trimmedOut}".`
    };
  }
}

window.codeRunner = new SafeCodeRunner();
