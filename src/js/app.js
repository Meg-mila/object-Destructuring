export default function destructuring(object) {
  const result = [];
  object.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
