// import PropTypes from 'prop-types';
import { BlockStat } from 'components/BlockStat/BlockStat';
import css from "components/Statistics/Statistics.module.css"


export const Statistics = ({ title, stats}) => { 
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat => <BlockStat  stat={stat} />)}
        </ul >
        </section>)
       
        
};

// Statistics.propTypes = {
//     title: PropTypes.string,
// }