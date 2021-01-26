import React from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TradesTable from './TradesTable';
export default function TradesContainer() {
    return (
        <section className="trades-container">
            <button className="trades-btn">
                <DragIndicatorIcon />
                <FiberManualRecordIcon style={{ color: 'green' }} fontSize='small' />
                Trades
                </button>

            <div className="trades-nav">
                <span>1 of 2</span>
                <div className="nav-btns">
                    <button >Prev</button>
                    <button >Next</button>
                </div>
                <select>
                    <option value="250">250</option>
                </select>
            </div>
                <TradesTable />
        </section>
    )
}
