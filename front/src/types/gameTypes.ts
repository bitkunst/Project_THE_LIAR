export interface GameType {
	gameErr: number;
	isLoading: boolean;
	isStart: boolean;
	myTurn: boolean;
	howMany: number;
	mySocket: any;
}

export interface GameActionType {
	mySocket: any;
	howMany: number;
}

export interface UserInfoType {
	nickname: string;
	level: number;
}
