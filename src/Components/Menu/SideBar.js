import React from "react"

const SideBar = () => {
	return (
		<div>
			<div className='main-sidebar sidebar-dark-primary' style={{ position: "fixed", width: "max-content" }}>
				{/* Brand Logo */}
				<a href='/' className='brand-link'>
					<img src='dist/img/logo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{ opacity: ".8" }} />
					<span className='brand-text font-weight-bold'>SEQUESTER</span>
				</a>
				{/* Sidebar */}
				<div className='sidebar fixed'>
					{/* SidebarSearch Form */}
					<div className='form-inline'>
						<div className='input-group' data-widget='sidebar-search'>
							<input className='form-control form-control-sidebar' type='search' placeholder='Search' aria-label='Search' />
							<div className='input-group-append'>
								<button className='btn btn-sidebar'>
									<i className='fas fa-search fa-fw' />
								</button>
							</div>
						</div>
					</div>
					{/* Sidebar Menu */}
					<nav className='mt-2'>
						<ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
							<li className='nav-item menu-open'>
								<a href='/dashboard' className='nav-link'>
									<i className='nav-icon fas fa-th' />
									<p>หน้าหลัก</p>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-file-alt' />
									<p>
										รายการใหม่
										<span className='right badge badge-danger'>New</span>
									</p>
								</a>
							</li>
							<li className='nav-item'>
								<a href='/gentextfile' className='nav-link'>
									<i className='nav-icon fas fa-upload' />
									<p>ส่งออกไฟล์</p>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-download' />
									<p>นำเข้าไฟล์</p>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-database' />
									<p>
										ข้อมูลพื้นฐาน
										<i className='fas fa-angle-left right' />
									</p>
								</a>
								<ul className='nav nav-treeview'>
									<li className='nav-item'>
										<a href='pages/UI/general.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลข่าวสาร</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/UI/general.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลผู้ใช้งาน</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/UI/icons.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลระดับผู้ใช้งาน</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/UI/buttons.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลสาขา</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/UI/modals.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลคำนำหน้าชื่อ</p>
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-coins' />
									<p>
										ข้อมูลหน่วยงานภายนอก
										<i className='fas fa-angle-left right' />
									</p>
								</a>
								<ul className='nav nav-treeview'>
									<li className='nav-item'>
										<a href='pages/forms/general.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลธนาคาร</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/forms/advanced.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>ข้อมูลหลักทรัพย์</p>
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-cog' />
									<p>
										ตั้งค่าระบบ
										<i className='fas fa-angle-left right' />
									</p>
								</a>
								<ul className='nav nav-treeview'>
									<li className='nav-item'>
										<a href='pages/tables/simple.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>Simple Tables</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/tables/data.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>DataTables</p>
										</a>
									</li>
									<li className='nav-item'>
										<a href='pages/tables/jsgrid.html' className='nav-link'>
											<span>&nbsp;&nbsp;&nbsp;</span>
											<i className='fas fa-caret-right nav-icon' />
											<p>jsGrid</p>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</div>
		</div>
	)
}

export default SideBar
