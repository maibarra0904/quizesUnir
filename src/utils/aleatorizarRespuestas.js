export const aleatorizarRespuestas = (options) => {
    const optionArray = Object.entries(options);
    for (let i = optionArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionArray[i], optionArray[j]] = [optionArray[j], optionArray[i]];
    }
    return Object.fromEntries(optionArray);
};