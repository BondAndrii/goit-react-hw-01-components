// import PropTypes from 'prop-types';
import { BlockStat } from 'components/BlockStat/BlockStat';
import data from '../../data.json'

export const Statistics = ({ title, stats}) => { 
    return (<section>
        {/* {title && <h2>{title}</h2>} */}
        <ul>
        {stats.map(stat => <BlockStat stat={stat} />)}
        </ul >
        </section>)
      
       
        
};
// Statistics.propTypes = {
//     title: PropTypes.string,
// }