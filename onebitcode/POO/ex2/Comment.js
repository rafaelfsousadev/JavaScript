class Comment{
    constructor(username, content){
        this.username = username
        this.content = content
        this.criatedAt = new Date()
    }
}

module.exports = Comment