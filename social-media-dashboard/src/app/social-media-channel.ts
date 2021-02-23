export interface KPI {
    kpi1: string;
    kpi1Value: number;
    kpi2: string;
    kpi2Value: number;
}
export interface SocialMedia {
    name: string;
    username: string;
    icon: string;
    followers: number;
    followersDifference: number;
    label: string;
    kpis: any;
}