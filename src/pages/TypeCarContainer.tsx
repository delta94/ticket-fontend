import React, { Component } from 'react';
import FooterDashboard from '../components/FooterDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import TableTypeCar from '../components/typeCar/TableTypeCar';
import { StaffService } from '../Services/StaffService';
import { Staff } from '../share/base-ticket/base-carOwner/Staff';
import { Paging } from '../share/base-ticket/Paging';
import Pagination from '@material-ui/lab/Pagination';
import FormTypeCar from '../components/typeCar/FormTypeCar';
import { TypeCarService } from '../Services/TypeCarService';
import { Car } from '../share/base-ticket/base-carOwner/Car';
import { TypeCar } from '../share/base-ticket/base-carOwner/TypeCar';

var self: TypeCarContainer;
class TypeCarContainer extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            typeCars: { page: 1, total: 1, totalPages: 1, rows: [], pageSize: 1 },
            showForm: false,
            typeCarForm: {}
        }
        self = this
    }

    componentDidMount() {
        this.getData(1);
    }

    getData(page: number = 1) {
        TypeCarService.list(page).then((typeCarPaging: Paging<TypeCar>) => {
            if (typeCarPaging) {
                this.setState({
                    typeCars: typeCarPaging
                })
            }
        })
    }

    typeCarForm(typeCar : TypeCar) {
        console.log(typeCar);
        self.setState({
            typeCarForm: typeCar,
            showForm: true
        })
    }

    typeCarFormCreate(typeCar:TypeCar) {
        TypeCarService.create(typeCar).then((res: any) => {
            if (res) {
                self.getData(self.state.typeCars.page);
            }
        })
        self.setState({
            showForm: false
        })
    }

    carDelete(id: string) {
        TypeCarService.delete(id).then((res: any) => {
            if (res) {
                self.getData(self.state.typeCars.page);
            }
        })
    }
    onCancel(){
        self.setState({showForm : false});
    }

    render() {
        return (
            <div>
                <FormTypeCar
                    formModal={this.state.showForm}
                    typeCar={this.state.typeCarForm}
                    onTypeCar={this.typeCarFormCreate}
                    onCancel = {this.onCancel}
                ></FormTypeCar>
                <Sidebar></Sidebar>
                <div className="main-content" id="panel">
                    <NavbarDashboard></NavbarDashboard >
                    <div className="header bg-primary pb-6">
                        <div className="container-fluid">
                            <HeaderDashboard></HeaderDashboard>
                        </div>
                    </div>
                    <div className="container-fluid mt--6">
                        <TableTypeCar
                            typeCar={this.state.typeCars.rows}
                            onTypeCar={this.typeCarForm}
                            onDeleteTypeCar={this.carDelete}
                        ></TableTypeCar>
                        <Pagination count={this.state.typeCars.totalPages} onChange={(event, value) => {
                            this.getData(value);
                        }} color="primary" />
                        <FooterDashboard></FooterDashboard>
                    </div>
                </div>
            </div>
        );
    }
}

type Props = {

}

type State = {
    typeCars: Paging<TypeCar>,
    showForm: boolean,
    typeCarForm: TypeCar
}

export default TypeCarContainer;