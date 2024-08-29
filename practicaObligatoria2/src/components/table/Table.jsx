import PropTypes from 'prop-types';
const Table = ({ netIncomes }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
Table.propTypes = {
    netIncomes: PropTypes.array,
}
export default Table;