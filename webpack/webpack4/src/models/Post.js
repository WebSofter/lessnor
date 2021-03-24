import img_jpg from '@/assets/img_jpg.jpg'

export default class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: img_jpg
        }, null, 2)
    }
}