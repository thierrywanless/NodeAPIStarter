export function getEnumKeyByEnumValue(
  myEnum: any,
  enumValue?: number | string,
  defaultValue?: number | string,
): string {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);

  if (keys.length > 0) {
    return keys[0];
  } else if (defaultValue) {
    return defaultValue.toString();
  } else {
    return "";
  }
}
