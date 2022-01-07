import fetchData from "../helpers/fetchData";

const HomepageCT = `
    #graphql
    query HomepageCT {
        CT {
            count
            PID
            Inpatient
            Age
            Height
            Weight
            protocol
            kV_A
            kV_b
            Pitch
            Route
            Type
            rate
            volume
            remark
        }
    }
`

export const getHomepageCT = async () => {
    const data = await fetchData(
        HomepageCT,
        {
            variables: {}
        }
    )

    return data.data.CT
}