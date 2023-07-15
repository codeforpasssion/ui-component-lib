export default function classNameUtils(...classes) {
  console.log("classes", classes);

  return classes.filter(Boolean).join(" ");
}
