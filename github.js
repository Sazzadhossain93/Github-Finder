class Github{
    constructor(){
     this.client_id = "1db22ba2fc3e7648b50f"; 
     this.client_secret = "70972f7fae1654e5fe50915f5e60664e8ad82c1e";  
     this.repos_count = 5;
     this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id} & 
        client_secret = ${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}& sort = ${this.repos_sort} &client_id = ${this.client_id} & 
        client_secret = ${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


  
        return{
            profile,
            repos
        }
    }


}