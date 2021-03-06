// Creating class
class Github {
  constructor(){
    this.client_id = 'ca3d27841305c37ad648';
    this.client_secret = '6e1d11d9eefa0a69c1a0099937ba50852a93fe1b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile,
      repos
    }
  }
}
