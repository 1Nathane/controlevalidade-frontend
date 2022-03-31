import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
       this.props.getSummary()
    }

    render() {
        const {expired} = this.props.summary
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='smile-o'
                            value={expired} text='Quantidade de lotes com validade acima de 30 dias' />
                        <ValueBox cols='12 4' color='yellow' icon='exclamation-circle'
                            value={expired} text='Quantidade de lotes com validade abaixo de 30 dias' />
                        <ValueBox cols='12 4' color='red' icon='frown-o'
                            value={expired} text='Quantidade de lotes com validade vendida          ' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)