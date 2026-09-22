export async function loadUser(id) {
  const response = await fetch(`/users/${id}`);
  const data = await response.json();

  return data.name;
}
