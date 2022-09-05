export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string,
        link: string,
        votes?: number) {
            this.link = link;
            this.title = title;
            this.votes = votes || 0;
        }
    
    upvote(): void {
        this.votes++;
    }

    downvote(): void {
        this.votes--;
    }

    domain(): string | null {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}