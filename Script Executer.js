javascript:(() => {
  const rawInput = prompt(
    "Learning Script Executer\n\nPaste JavaScript or a full javascript: bookmarklet below."
  );

  if (!rawInput) {
    alert("No script provided.");
    return;
  }

  const trimmed = rawInput.trim();
  const code = trimmed.startsWith("javascript:")
    ? decodeURIComponent(trimmed.slice("javascript:".length))
    : trimmed;

  const preview = code.length > 280 ? `${code.slice(0, 280)}...` : code;
  const confirmed = confirm(
    `About to execute this script:\n\n${preview}\n\nOnly run code you understand.`
  );

  if (!confirmed) {
    alert("Execution cancelled.");
    return;
  }

  try {
    (0, eval)(code);
  } catch (error) {
    console.error("Script execution failed:", error);
    alert(`Script execution failed: ${error?.message ?? error}`);
  }
})();
