import {SectionStatistics, TitleStatistics, StatListStatistics, ItemStatistics, LabelStatistics, PercentageStatistics} from './Statistics-style'



export const Statistics = ({title, stats }) => {
    return (<SectionStatistics>
  <TitleStatistics>{title}</TitleStatistics>

  <StatListStatistics>
    {stats.map(item => { return <ItemStatistics key={item.id}>
      <LabelStatistics>{item.label}</LabelStatistics>
      <PercentageStatistics>{item.percentage}%</PercentageStatistics>
    </ItemStatistics>
    })}
  </StatListStatistics>
</SectionStatistics>
    )
}