import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './providerActions'

import Grid from '../common/layout/grid'


class SelectProvider extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
          <option key={bc._id} value={bc._id}>{bc.name}</option>
        ))
    }
    render() {
        return (
          <Grid cols="12 4">
            <div className="form-group">
              <label htmlFor='provider_id'>Fornecedor</label>
              <select id="provider_id" className="form-control"
              tabIndex="-1" >
                <option></option>
                {this.renderRows()}
              </select>
              <input className="form-control" type="search" tabIndex="0" autoComplete="off"
              autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox"
              aria-autocomplete="list" placeholder='Informe o fornecedor' />
            </div>
          </Grid>
        )
    }
}

const mapStateToProps = state => ({list: state.provider.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectProvider)