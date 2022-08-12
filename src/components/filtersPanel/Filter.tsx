interface FilterI {
    subTitle: string,
    listComponents: JSX.Element[],
    classes?: string
}

export const Filter: React.FC<FilterI> = ({ subTitle, listComponents, classes = '' }) => {

    const listContent = listComponents.map((item, index) => {
        return (
            <li key={`${subTitle}${index}`}>{item}</li>
        )
    })

    return (
        <>
            <section className="filtersPanel__filter">
                <h3 className="filtersPanel__subtitle">{subTitle}</h3>
                <ul className={`filtersPanel__options-list ${classes}`}>
                    {listContent}
                </ul>
            </section>
        </>
    )
}