export interface GameType {
	gameErr: number;
	isLoading: boolean;
	isStart: boolean;
	myTurn: boolean;
	howMany: number;
	mySocket: any;
}

export interface UserInfoType {
	nickname: string;
	level: number;
}
