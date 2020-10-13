
// thành phần phản ứng được sử dụng để tạo cảnh báo ngọt ngào
import React from "react"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ImportExportIcon from '@material-ui/icons/ImportExport';

import AddIcon from '@material-ui/icons/Add';

import { Trip } from '../../share/base-ticket/base-carOwner/Trip';

type Props = {
    onTrip: Function,
    trip: Trip[],
    onDeleteTrip: Function
}

export default function TripTables(props: Props) {
    return (
        <div className="card">
            {/* Card header */}

            <div className="card-header border-0">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-0">Danh sách nhân viên</h3>
                    </div>

                    <div className="col-6 text-right">
                        <button onClick={() => {
                            props.onTrip({});
                        }}
                            className="btn btn-sm btn-primary btn-round btn-icon"
                            data-toggle="tooltip"
                            data-original-title="Edit product" >
                            <span className="btn-inner--icon"><AddIcon /></span>
                            <span className="btn-inner--text">Thêm</span>
                        </button>
                        <a href="#" className="btn btn-sm btn-primary btn-round btn-icon" data-toggle="tooltip" data-original-title="Edit product">
                            <span className="btn-inner--icon"><ImportExportIcon /></span>
                            <span className="btn-inner--text">Export</span>
                        </a>
                        <div className="form-group row float-right">
                            <div className="col-md-auto">
                                <input className="form-control form-control-default" type="search" placeholder="Tìm kiếm" id="example-search-input" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Light table */}
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="sort" data-sort="name">Địa điểm bắt đầu</th>
                            <th scope="col" className="sort" data-sort="birthday">Địa điểm kết thúc</th>
                            <th scope="col" className="sort" data-sort="address">Thời gian bắt đầu dự kiên</th>
                            <th scope="col" className="sort" data-sort="numberphone">Thời gian kết thúc dự kiến</th>
                            <th scope="col" className="sort" data-sort="numberphone">Thời gian bắt đầu</th>
                            <th scope="col" className="sort" data-sort="numberphone">Thời gian kết thúc</th>
                            <th scope="col" className="sort" data-sort="cmnd">Tài xe</th>
                            <th scope="col" className="sort" data-sort="chucVu">Phụ xe</th>
                            <th scope="col" className="sort" data-sort="action">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.trip?.map((tripItem: Trip) => {
                                return (
                                    <tr>

                                        <td className="table-user">
                                            <img src="/images/huynhvannam.jpg" className="avatar rounded-circle mr-3" />
                                            <b>{tripItem.localStart}</b>
                                        </td>

                                        <td>
                                            <b><span className="text-muted">{tripItem.localEnd}</span></b>
                                        </td>
                                        <td>
                                            <span className="text-muted">{tripItem.scheduledStrartAt}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{tripItem.scheduledEndAt}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{tripItem.startAt}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{tripItem.endAt}</span>
                                        </td>

                                        <td>
                                            <span className="text-muted">{tripItem.driver?.name}</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">{tripItem.staff?.name}</span>
                                        </td>

                                        <td className="table-actions">
                                            <a href="#!" className="table-action" data-toggle="tooltip" data-original-title="Edit product">
                                                <EditIcon
                                                    onClick={() => {
                                                        props.onTrip(tripItem)
                                                    }}
                                                />
                                            </a>
                                            <a href="#!" className="table-action table-action-delete" data-toggle="tooltip" data-original-title="Delete product">
                                                <DeleteIcon
                                                    onClick={() => {
                                                        if (tripItem && tripItem._id) props.onDeleteTrip(tripItem._id)
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/*  Card footer */}
            <div className="card-footer py-4">


                {/* <Pagination  color="primary" /> */}
            </div>

        </div>
    )
}
