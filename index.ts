class BlogPost {
    blogTitle: string;
    blogText: string;

    constructor(title: string, text: string) {
        this.blogTitle = title;
        this.blogText = text;

    }

};

let blogPosts: BlogPost[] = [];
//let archive = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-form");
    let title = form["blog-title"].value;
    let textarea = form["blog-text"].value;
    blogPosts.push(new BlogPost(title, textarea));
    outputBlog(title);
    outputBlogBody(textarea);
    //moveToArchive(blogPosts);
}

const outputBlog = (title) => {
    let target = document.getElementById('blog-output');
    let node = document.createElement("h2");
    let textnodetitle = document.createTextNode(title);
    node.appendChild(textnodetitle);
    target.appendChild(node);

}

const outputBlogBody = (textarea) => {
    let target = document.getElementById('blog-output');
    let node = document.createElement("p");
    let textnodepost = document.createTextNode(textarea);
    node.appendChild(textnodepost);
    target.appendChild(node);

}

/*/const moveToArchive = (blogPosts) => {
    let oldPost = BlogPost[0];
    archive.push(oldPost);
    document.getElementById('archive').appendChild(title);
    document.getElementById('archive').appendChild(textarea);
    blogPosts.shift();
}/** */

}



