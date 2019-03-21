class BlogPost {
    blogTitle: string;
    blogText: string;

    constructor(title: string, text: string) {
        this.blogTitle = title;
        this.blogText = text;

    }

};

let blogPosts: BlogPost[] = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-form");
    let title = form["blog-title"].value;
    let textarea = form["blog-text"].value;
    blogPosts.push(new BlogPost(title, textarea));
    outputBlog(title);
    outputBlogBody(textarea);
}

const outputBlog = (title) => {
    let target = document.getElementById('blog-output');
    let node = document.createElement("p");
    let textnodetitle = document.createTextNode(title);
    node.appendChild(textnodetitle);
    target.appendChild(node);

}

const outputBlogBody = (textarea) => {
    let target = document.getElementById('blog-output');
    let node = document.createElement("blogbody");
    let textnodepost = document.createTextNode(textarea);
    node.appendChild(textnodepost);
    target.appendChild(node);

}

const resetBlog = (title, textarea) => {

}

