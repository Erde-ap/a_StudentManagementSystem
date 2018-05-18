import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

class DayTable extends Component{
    render(){
        const day = this.props.dayData.day
        const dow = this.props.dayData.dow
        const grid1 = this.props.dayData.period1
        const grid2 = this.props.dayData.period2
        const grid3 = this.props.dayData.period3
        const grid4 = this.props.dayData.period4
        const grid5 = this.props.dayData.period5

        return(
                <tbody>
                <tr>
                    <td>{day}</td>
                    <td>{dow}</td>
                    { grid1 == 0 ? <td>{grid1}</td> : null}
                    { grid1 == 1 ? <td class="table-warning">{grid1}</td> : null}
                    { grid1 == 2 ? <td class="table-danger">{grid1}</td> : null}
                    { grid1 == 3 ? <td class="table-info">{grid1}</td> : null}
                    { grid1 == 4 ? <td class="table-success">{grid1}</td> : null}
                    { grid1 == 5 ? <td class="table-primary">{grid1}</td> : null}

                    { grid2 == 0 ? <td>{grid2}</td> : null}
                    { grid2 == 1 ? <td class="table-warning">{grid2}</td> : null}
                    { grid2 == 2 ? <td class="table-danger">{grid2}</td> : null}
                    { grid2 == 3 ? <td class="table-info">{grid2}</td> : null}
                    { grid2 == 4 ? <td class="table-success">{grid2}</td> : null}
                    { grid2 == 5 ? <td class="table-primary">{grid2}</td> : null}

                    { grid3 == 0 ? <td>{grid3}</td> : null}
                    { grid3 == 1 ? <td class="table-warning">{grid3}</td> : null}
                    { grid3 == 2 ? <td class="table-danger">{grid3}</td> : null}
                    { grid3 == 3 ? <td class="table-info">{grid3}</td> : null}
                    { grid3 == 4 ? <td class="table-success">{grid3}</td> : null}
                    { grid3 == 5 ? <td class="table-primary">{grid3}</td> : null}

                    { grid4 == 0 ? <td>{grid4}</td> : null}
                    { grid4 == 1 ? <td class="table-warning">{grid4}</td> : null}
                    { grid4 == 2 ? <td class="table-danger">{grid4}</td> : null}
                    { grid4 == 3 ? <td class="table-info">{grid4}</td> : null}
                    { grid4 == 4 ? <td class="table-success">{grid4}</td> : null}
                    { grid4 == 5 ? <td class="table-primary">{grid4}</td> : null}

                    { grid5 == 0 ? <td>{grid5}</td> : null}
                    { grid5 == 1 ? <td class="table-warning">{grid5}</td> : null}
                    { grid5 == 2 ? <td class="table-danger">{grid5}</td> : null}
                    { grid5 == 3 ? <td class="table-info">{grid5}</td> : null}
                    { grid5 == 4 ? <td class="table-success">{grid5}</td> : null}
                    { grid5 == 5 ? <td class="table-primary">{grid5}</td> : null}
                </tr>
                </tbody>
        )
    }
}

export default DayTable