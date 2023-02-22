const baseUrl = "https://api.github.com";
const perPage = 5;
export async function githubSearcUsers(filters, page) {
  const { user, location, language } = filters;
  try {
    const jsonData = await fetch(
      `${baseUrl}/search/users?q=${user}${
        location ? "+location:" + location : ""
      }${language ? "+language:" + language : ""}&per_page=${perPage}&page=${
        page ? page : 1
      }`
    );
    const data = await jsonData.json();
    if (data.message) {
      throw data;
    }
    const items = data.items?.map((item) => {
      return { name: item.login, image: item.avatar_url, id: item.id };
    });
    return { total: data.total_count, items };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function githubUserDetails(userId) {
  try {
    const jsonData = await fetch(`${baseUrl}/users/${userId}`);
    const data = await jsonData.json();
    if (data.message) {
      throw data;
    }
    const jsonRepos = await fetch(`${baseUrl}/users/${userId}/repos`);
    const repos = await jsonRepos.json();
    if (repos.message) {
      throw data;
    }
    return { ...data, repos };
  } catch (error) {
    console.log(error);
    return error;
  }
}
