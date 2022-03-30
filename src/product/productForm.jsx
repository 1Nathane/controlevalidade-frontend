import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './productActions'
import LabelAndInput from '../common/form/labelAndInput'

class ProductForm extends Component {

 //  constructor(props) {
 //   super(props)
 //   this.state = {
 //     items: [
 //       { id: 1, text: "Learn JavaScript" },
 //       { id: 2, text: "Learn React" },
 //       { id: 3, text: "Play around in JSFiddle" },
 //       { id: 4, text: "Build something awesome" }
 //     ],
 //     selectItem: 4
 //   };
 //   this.handleSelectItem = this.handleSelectItem.bind(this);
 // }
 //
 // handleSelectItem(e) {
 //   this.setState({selectItem: e.target.value});
 // };

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 8' placeholder='Informe o nome' />
                    <Field name='reference' component={LabelAndInput} readOnly={readOnly}
                        label='Referência' cols='12 4' placeholder='Informe o nome' />
                    <Field name='storageLocation_id' component={LabelAndInput} readOnly={readOnly}
                        label='Local de armazenamento' cols='12 4' placeholder='Informe o local' />
                    <Field name='unit_id' component={LabelAndInput} readOnly={readOnly}
                        label='Unidade' cols='12 4' placeholder='Informe a unidade' />
                    <Field name='brand_id' component={LabelAndInput} readOnly={readOnly}
                        label='Marca' cols='12 4' placeholder='Informe a marca' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

ProductForm = reduxForm({form: 'productForm', destroyOnUnmount: false})(ProductForm)
const selector = formValueSelector('productForm')
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
