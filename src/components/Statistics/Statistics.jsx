import PropTypes from 'prop-types'

import { SectionStatistics, TitleStatistics, StatListStatistics, ItemStatistics, LabelStatistics, PercentageStatistics } from './Statistics-style'



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


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
}