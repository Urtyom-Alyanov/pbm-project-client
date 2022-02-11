export interface IUser {
    id: number;

    username: string;
    nick?: string;

    desc?: string;
    img?: string;

    vkId: number;

    balance: number;
};