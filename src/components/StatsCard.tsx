import { Card, Statistic } from "antd";

interface Props {
    title: string;
    value: number;
}

export default function StatsCard({
                                      title,
                                      value
                                  }: Props) {

    return (

        <Card className="stats-card">

            <Statistic
                title={title}
                value={value}
            />

        </Card>

    );
}
