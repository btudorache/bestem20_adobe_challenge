export class Post {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public artist: string,
        public location: string,
        public created_at: Date) {
    }
}