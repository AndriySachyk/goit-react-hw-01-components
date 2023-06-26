import {
    TabletTransactionHistory,
    TheadTransactionHistory,
    TrTransactionHistory,
    ThTransactionHistory,
    TrBodyTransactionHistory,
    TbodyTransactionHistory,
    TdTransactionHistory
} from './TransactionHistory-style'


export const TransactionHistory = ({items}) => {
    return (
        <TabletTransactionHistory>
        <TheadTransactionHistory>
            <TrTransactionHistory>
            <ThTransactionHistory>Type</ThTransactionHistory>
            <ThTransactionHistory>Amount</ThTransactionHistory>
            <ThTransactionHistory>Currency</ThTransactionHistory>
            </TrTransactionHistory>
        </TheadTransactionHistory>

            <TbodyTransactionHistory>
                {items.map(item => {
                    return <TrBodyTransactionHistory key={item.id}>
                        <TdTransactionHistory>{item.type}</TdTransactionHistory>
                        <TdTransactionHistory>{ item.amount}</TdTransactionHistory>
                        <TdTransactionHistory>{ item.currency}</TdTransactionHistory>
                    </TrBodyTransactionHistory>
                })}
            
            </TbodyTransactionHistory>
        </TabletTransactionHistory>
    )
}