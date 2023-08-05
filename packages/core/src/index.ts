import {
  ConfigurationOptions,
  getConfigOptionBoolean,
  validateConfig,
} from "./config";

const main = async () => {
  if (!validateConfig()) {
    console.error("Mandatory configuration options are missing.");
    return;
  }

  console.log(
    `Program execution succeeded. Optional Argument: ${getConfigOptionBoolean(
      ConfigurationOptions.OptionArgument
    )}`
  );
};

main().catch(console.error);
