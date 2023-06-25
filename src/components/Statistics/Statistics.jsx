import {Section, Title, StatList, Item, Label, Percentage} from './Statistics-style'



export const Statistics = ({title, stats }) => {
    return (<Section>
  <Title>{title}</Title>

  <StatList>
    {stats.map(item => { return <Item id={item.id}>
      <Label>{item.label}</Label>
      <Percentage>{item.percentage}%</Percentage>
    </Item>
    })}
  </StatList>
</Section>
    )
}