import React, { useState, useEffect } from 'react';
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import ReactBSAlert from "react-bootstrap-sweetalert";
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AddIcon from '@material-ui/icons/Add';
import { Staff } from "../../share/base-ticket/base-carOwner/Staff";
import { Customer } from '../../share/base-ticket/base-carOwner/Customer';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';

type Props = {
    customer: Customer
    formModal: boolean,
    onCustomer: (customer: Customer) => void
    onCancel: () => void
}



export default function FormCustomer(props: Props) {
    const [customer, setCustomer] = useState<Customer>(props.customer)
    useEffect(() => {
        setCustomer(props.customer)
    }, [props])
    return (
        <div>
            <div className={props.formModal ? "modal fade show show-dialog" : "modal fade hidden-dialog"} id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true" aria-modal="true">
                <div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Thêm Khách hàng</small>
                                    </div>
                                    <form role="form">
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Tên khách hàng</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.name || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, name: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>

                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >CMND</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.CMND || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, CMND: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Email</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.email || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, email: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Email</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        value={customer.phoneNumber || ""}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, phoneNumber: event.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>


                                        {/* Ngày sinh  */}
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel >Email</InputLabel>
                                                    <OutlinedInput
                                                        endAdornment={<FaceIcon />}
                                                        fullWidth
                                                        labelWidth={200}
                                                        defaultValue={"2020-10-14"} 
                                                        type={"date"}
                                                        onChange={(event) => {
                                                            setCustomer({ ...customer, BirthAt: new Date(event.target.value) })
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                

                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel id="demo-simple-select-outlined-label">Giới tính </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        defaultValue = {10}
                                                        label="Age"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Nam</MenuItem>
                                                        <MenuItem value={20}>Nư</MenuItem>
                                                        <MenuItem value={30}>Bê đê</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className="text-center">
                                            <Button color="success"
                                                onClick={() => {
                                                    props.onCustomer(customer);
                                                }}
                                            >Thêm</Button>
                                            <Button
                                                color="warning"
                                                className="btn-warning"
                                                onClick={(event) => {
                                                    props.onCancel()
                                                }}
                                            >Hủy</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

