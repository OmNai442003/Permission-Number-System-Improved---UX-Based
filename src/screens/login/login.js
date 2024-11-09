import React, { useState } from 'react';
import HeadComponent from '../../components/head/HeadComponent';
import users from '../../assets/json/allrecords.json';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(users);
        navigate()
    };

    return (
        <>
            <HeadComponent />
            <header class="siteHeader sticky-wrapper">
                <div aria-hidden="true" aria-labelledby="searchModal" class="modal fade" id="siteSearch" role="dialog"
                    tabindex="-1">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-1">
                                            <button class="btn closeSearch" data-dismiss="modal" type="button"><span
                                                class="far fa-times-circle"></span> Close
                                            </button>
                                        </div>
                                        <div class="col-lg-11">
                                            <form action="https://fresnostate.edu/search/" method="get">
                                                <label for="search" id="searchModal">Search</label>
                                                <input class="form-text" id="search" name="q" placeholder="Search" type="text" /><input class="form-submit btn btn-default btn-black" type="submit" value="GO" /></form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade site-navigation" id="site-navigation" role="dialog" tabindex="-1">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button class="btn menuClose" data-dismiss="modal" type="button"><span
                                    class="far fa-times-circle"></span><span class="sr-only">Close Menu</span></button>
                                <nav aria-label="Primary navigation" class="main-navigation">
                                    <div class="top-row">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xl-2">
                                                    <div class="logo"><a href="https://fresnostate.edu"><span class="sr-only">Fresno State</span></a>
                                                    </div>
                                                </div>
                                                <div class="col-xl-10">
                                                    <nav aria-label="Global Navigation" class="audience">
                                                        <ul class="nav justify-content-end">
                                                            <li class="nav-item"><a
                                                                aria-label="Future student link in global nav to admissions and recruitment website"
                                                                class="nav-link"
                                                                href="https://studentaffairs.fresnostate.edu/are/index.html">Future
                                                                Students</a></li>
                                                            <li class="nav-item"><a
                                                                aria-label="Current student link in global nav to Student Affairs and Enrollment Management website"
                                                                class="nav-link"
                                                                href="https://studentaffairs.fresnostate.edu/student-resources.html">Current
                                                                Students</a></li>
                                                            <li class="nav-item"><a
                                                                aria-label="Link in global nav to Alumni website"
                                                                class="nav-link"
                                                                href="https://fresnostate.edu/alumni/index.html">Alumni</a></li>
                                                            <li class="nav-item"><a
                                                                aria-label="Link in global nav to Faculty and staff page"
                                                                class="nav-link"
                                                                href="https://fresnostate.edu/faculty-staff.html">Employees</a>
                                                            </li>
                                                            <li class="nav-item"><a
                                                                aria-label="Link in global nav to Donation site"
                                                                class="nav-link"
                                                                href="https://fresnostate.imodules.com/s/1692/23/home.aspx?sid=1692&gid=2&pgid=2541">Give</a>
                                                            </li>
                                                            <li>
                                                                <button class="btn searchToggle" data-target="#siteSearch"
                                                                    data-toggle="modal"
                                                                    type="button"><span
                                                                        class="sr-only">Search</span><span aria-hidden="true"
                                                                            class="fas fa-search"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button class="quicklinks" data-target="#off-screen-main-nav"
                                                                    data-toggle="modal"
                                                                    title="Open Quick Links menu" type="button">Quick Links
                                                                    <span aria-hidden="true" class="fas fa-angle-right"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bottom-row">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <ul class="nav justify-content-center nav-fill">
                                                        <li class="nav-item"><a class="nav-link" href="/login"><span
                                                            class="fas fa-home"></span><span class="sr-only">Home</span></a>
                                                        </li>
                                                        <li class="nav-item"><a class="nav-link"
                                                            href="https://fresnostate.edu/about.html"
                                                            id="about_us">About Us</a></li>
                                                        <li class="nav-item"><a class="nav-link"
                                                            href="https://studentaffairs.fresnostate.edu/are/"
                                                            id="admissions">Admissions</a></li>
                                                        <li class="nav-item"><a class="nav-link"
                                                            href="https://www.fresnostate.edu/academics.html"
                                                            id="academics">Academics</a></li>
                                                        <li class="nav-item"><a class="nav-link"
                                                            href="https://www.fresnostate.edu/student-life.html"
                                                            id="student_life">Student Life</a></li>
                                                        <li class="nav-item"><a class="nav-link"
                                                            href="https://www.fresnostate.edu/research.html"
                                                            id="research">Research</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="https://gobulldogs.com/"
                                                            id="athletics">Athletics <i
                                                                aria-hidden="true" class="fas fa-external-link-alt"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="off-screen-nav-mobile-audience" role="navigation">
                                        <h2>Quick Links</h2>
                                        <nav aria-label="Quick Links on Mobile" class="audience">
                                            <ul class="nav">
                                                <li class="nav-item"><a aria-label="Calendar link in Quicklinks" class="nav-link"
                                                    href="https://www.fresnostate.edu/events/"><span
                                                        class="fas fa-calendar-alt"></span> Calendar</a></li>
                                                <li class="nav-item"><a aria-label="Canvas link in Quicklinks" class="nav-link"
                                                    href="https://www.fresnostate.edu/canvas"><span
                                                        class="fak fa-canvas"></span> Canvas</a></li>
                                                <li class="nav-item"><a aria-label="Catalog link in Quicklinks" class="nav-link"
                                                    href="https://www.fresnostate.edu/catalog/"><span
                                                        class="fas fa-book-open"></span> Catalog</a></li>
                                                <li class="nav-item"><a aria-label="Directory link in Quicklinks" class="nav-link"
                                                    href="https://directory.csufresno.edu/"><span
                                                        class="fas fa-user"></span> Directory</a></li>
                                                <li class="nav-item"><a aria-label="Email link in Quicklinks" class="nav-link"
                                                    href="https://mail.fresnostate.edu/"><span
                                                        class="fas fa-envelope"></span> Email</a></li>
                                                <li class="nav-item"><a aria-label="Library link in Quicklinks" class="nav-link"
                                                    href="https://www.fresnostate.edu/library/"><span
                                                        class="fas fa-book"></span> Library</a></li>
                                                <li class="nav-item"><a aria-label="Kennel Bookstore link in Quicklinks"
                                                    class="nav-link"
                                                    href="https://www.bkstr.com/kennelstore/home"><span
                                                        class="fas fa-envelope"></span> Kennel Bookstore</a></li>
                                                <li class="nav-item"><a aria-label="Map link in Quicklinks" class="nav-link"
                                                    href="https://www.fresnostate.edu/map/"><span
                                                        class="fas fa-map-marker-alt"></span> Map</a></li>
                                                <li class="nav-item"><a aria-label="My Fresno State link in Quicklinks"
                                                    class="nav-link"
                                                    href="https://my.fresnostate.edu/"><span
                                                        class="fas fa-cog"></span> My Fresno State</a></li>
                                                <li class="nav-item"><a aria-label="Technology Service Desk link in Quicklinks"
                                                    class="nav-link"
                                                    href="https://help.fresnostate.edu/"><span
                                                        class="fas fa-envelope"></span> Technology Service Desk</a></li>
                                                <li class="nav-item"><a aria-label="Zoom Conferencing link in Quicklinks"
                                                    class="nav-link"
                                                    href="https://fresnostate.zoom.us/"><span
                                                        class="fas fa-webcam"></span> Zoom Conferencing</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="slider-wrapper">

            </div>
            <div class="content" id="main-content">
                <div id="content">
                    <div class="section bg-white">
                        <div class="container">
                            <h1 class="display-4 justify-content-center text-center section-intro w-100">Campus Login Services</h1>
                            <div class="row justify-content-center w-100 ">

                                <div class=" align-items-center col-8 col-md-5 col-lg-7 justify-content-center">

                                    <form id="login" name="login" method="post" onsubmit="onSubmit()" className='formsize'>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="username">Username</label>
                                            <input type="text" id="username" name="username" class="form-control form-control-lg" autocomplete="off" autocorrect="off" autocapitalize="off" autoFocus /></div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="password">Password</label>
                                            <input type="password" id="password" name="password" class="form-control form-control-lg" autocomplete="off" autocorrect="off" autocapitalize="off" /></div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-info btn-lg btn-block btn-blue" type="submit">Login</button>
                                        </div>

                                        <input type="hidden" name="execution" value="2a15425e-9a5e-48a7-8579-ffe44fd48778_ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0lzSW10cFpDSTZJalEyWVRObU5UZGtMV1ZpWmpJdE5ERm1aUzFoTW1GbExUUmhZekEwWldFek5EaGhZU0o5LlhONjFJbkItem8wVGtfTUJvbDlCQjhJcDltV2ZfdTF5TGJ3VjMwS3BibmRDc3JNOEFheFViTGJleHF5V1M4d3dkek5xdk5XalotSURCRDBZVER5dGhKYTJNMC1yVm9ENHJ4UWRsSmlKMzNUbVdDZWQ1VEVLajlXZEh6OTEzSl92YTJJOVZUbUhRWTNQdGp4VFRWbTZPcHNZcUo4UVI3NlhsNzV0c0VXU1VuemxsQURfTll4MDloQjZSX0VmYmdVaHNVUGhjZHlPMlJXUlBYLU1pOHdoeTBRT2k4WkRXRjA0ZGNXUElldWVTalBrVlVTNTlPcVVKYU16cFF1OHVKUUtZa3pCeFRXcUZ0NzJUR3pDRFBrTWlqbjdPRy04Wk5MZU5VNElremktbTgwYXJwVVlnUnJmV0pmN191aGNucTZXMW50YjdtdWV5N3ZXc1Z6YU5FaGgxYjZjRE5tbTR3bG13dWxKSjZfZXREQWpGc0dZUXlMWDJKbnFBN29uWERnWjRwTTJjbEh2ZGRyT21SVDlsbjVaYU5XNy1adXFiNUN1R3NCVXlaOVI1R3JjZVRlMUlOOURldFJXakFWNngxdTh6Zm55dXd2ZzNkclVFLUN5bU9PUzRkeW4wU0kyeFRrNkxNRU01RlhHenJoN192YURzMm5uY2t2MjBmYkdDQjlnaVJZTkxFZGREcmpYQ0JobjliQi1aZzBjSHcxWmdXZ3ZvSjNYMDhHdy1hZmZfYUttdk82d0FfZWJ4YXc1NGtUWWpzSVpnYXVfVjBDNjFQejI1VmQxTVdTWTd2SWk0bUd5NGlFYm9oQUdTbTBtTHdPdkVHdXhJOTNhTC16d3hudXdzU3FvSTF4RkZvbmdtcFBjZXM4cGRYTFlqcDJpcF9vaEtYM2JRQnphN2NwclI5eFBGcS0wQ0VsVjRXVDhZbk1nc3ZYc25mWGQxeG9rM0t1Q0JEWDluSWVKSTNiM2twZmxhVHlaSENrYWNIZnN2R193RHcwWkdTM0hOcGtUdGVndGozS1pTNmJaOFZiNVczb29zU0VFMEY3UmI5OFg2eXN6dlJ4X0FBLWJZYUNONERrNkZCcThOTjB5LU5Hek4xWF91cXZhUU5HQlhGLWhzb1BHcW4zd3dOOWNRQnFBZXRpUnpMMmdrNHVaUlBZQlFrc3hXbTdoQ1dVOHZieW1rVmRYY09Eb0QwMC1wU3I2TU15TGplbngxTDNCVm9IRVNxWWNtRmhpcjVKcXJvMmNzNzhndVlxQ1ZUZ05aUVhKb1BULVRPQkFhckpvNUdEMFc4QkZMU2trMVQ0TnRFdVFwM0EzSDFwcDdaOS1pMVlpak84Rjk2d2g4ZkdKZjU3LUVndXVSYWlEQ2JOTG1jZllaVm4tamFtMTI2VVVKbXFhX2pyUldFYnRhRVhuRWJDNGJCU1RqUGlMbGo2cFpUaWNqdXVPaE4tR2J1TVdkOFpmWVRMaS1EMWpyYXRTVGZua01haTVmQXlna0V5UW9tUm0yTDVHQm1nLTZvRHdZUElUanpvcm5UYm9uNWlBWmZpeV9ObWVHMFk0SVlXUThDdTlmUzZzdVhVczVsQ0RqWVl4SXZqeEpGNldicVBpZVo4OEZINkFwQW14MGI0bHBMRlVCUHhSOVdWT3ZOa042ZG9HTXFYY3B1NVdfME91Nk5haGRaUlJYQ29iUVppR19LcDY2TEI1MjNHZ1k4c0QtUlc3Q0N5S2xZczh6bTBSbjNUb1NOVTVPX0paaW4yUFdtVTNveUUwY3RWOWYwVWFfa0FETGpiUk10UlQwNVZQR0I4d3dfUnhwWWZXU1Q4X1VkZWpIXzNlZTF0YUY3N0lsczU3MWhOVW9sZmk3RHhXaVNybGVpMFV1cWhCeTI0cEIxVlBSX2JlY2kzZndHdkFTd2plTE1wc3BhVFRxNFZaQ2U0RHZqQmkyWVg1dDg0bUVSbnVzdEVRaUtGT29INTB3bnJzUnZjRHprazAyZ2pIMWpSVGhBRXI4S0N2cDNLVVdpOWxjU0FpOHJlcFN3UU1xN3dlS2l0Vm9HM3R5RkJNQXpubjJ1Nkp5Z3I5NUhSamdKeGw4WTJrcjNJZmp6cjlHT0JPZzV3RnQzdk5BSFRwbDV4dVg0dGVUMFUyRFNRNFI0OERTckIxV29kei1mTHNKTlVsVlBpWnJPZTBLSjhLbEpSdnhNMnd4bWFpSlJBSTV4VXhfUEdycVJGblp1Z1Zhc0FXTDdKblNOM2hZWTRNV0tkelBGSE9TS0lHeW1xblNNQWVQSHFQa09SaTZ6cC1PRENkRm9WaVhHZm14akduTWVyVjM1RUxCMGlBUTU4b3FER1J3eWZKQl9PaWZ0c1JWVUt3SFljS2FObVlYVi1VeU1oblBEb3V5d1Z1NElCa05TRktlTnJKU1l1bTc4ajJ6T05hSlEzVkd2MDRTWXdSeTZCYU1XdUt6dDNTNGcxWkZ3UERwMTdQaHU0cTYwVVpjV3NBcElyZkVsejdBaEhscHhTWGE4MDVYbnhoakhQUWtMMHVMSFljUnFTSTlSZTNVUmlDREhoWHNHSUk0QnJncm1HNHVoSEU5cVYtVWdqTzFUdDhVbWV3Q2tweVpQSEIxdmo0OW13NGVrVFFwak1lYU5DbkpGLUJjSFdRTkRaekh3dnhWengwa0w1N1N1OV9IQ2o4SV9yN2NlWnExUFktNTF1bW8zS0szSWpQcVhwWW1XaVpXaFcyeDNmNWYxVWV2bXdSN19hZHU2em04VDNBNk1OTDkxRWIxZ3l4R2JocHFMX2NyN3hTaVdYcWdCOUlPVUZDUDRaNWxqLUVDWjZaaktEeU9WSml6N2tFVmlVQ1ZOcDBjeWtJQlYyRC1BaExVUDVCRmhIZFdJeDNsVDc5OVlRT2FZN0xBVFRGcWRlS25JX3dYSDQyYVc1R0N4T1pCSU9fd2NkTEdJZzc3Z1lVRDd5SUk3d3FTV2wxOVYwRkZicl84YmVORUpJZTh0dV9sNlE4a1BtaW1aeTNHWEp5TnhNcDJzZVNlam5rdXZkdVpzVko1RlRhcUhRa250dnVqcFoxTjBjT3FFazZKcDA5UWwta0VTZ0pwVHAxanZYbUFJZTg3V21HbjVkUjdSUUowU1c0UkJScWJVMFVJM3piTEtXLXpIdVh2ZUNZSlNHc0RfbURvZmhwYkphZFRlTkJFRUhCRDZCaGRjXy03VXNBdUgzX1ZNTXJnMHhQc0dpVjAxY1RYZUxmOEZocUVVcUpYVnNQYThDZUpNYWI0TFo4VHV1WDNnQ21BYWRsQXp3YUN2RmdNQ1VZbEpLQTZlMnlOdGFVdWpYVVJWLXJ5LXhTMXpHZmV2dnJsYWR0aW05by1IY2c3MGdmV1lCMERRenJkWE1nWmt1RXBIMWtleC03eXZfakI4ZzJxWi15MEZUNGx3NUpPUGRVa3ZsTlRucHBnYTlQN0dRbHQtMUVxODhuQU1rbkdXLWhiMmt1QklyQ1JDVW4wTTBOOEdMckFEcFFHZVo5c3ptU1AydUxjTUtfYkNVTjUxMEV1elpfakFGUVlSX2ZHNnVfM3dWcXRkMHl2dXlrdjYxampRS0xqNV94ZU51M2haaW42d3U3c3dvOE1nYThtYnZNZnI5bUdRaWozdWNTNTI5SlpSZkR5eUdscjEyNW1PSzdBVDB1RUVOSkZoQ2VTeXcyTk1aMTdOTF9LWm8wbUQtSlJQdXYwLTg0YWJVSzlxdHlIQ3RwakFULWhBWGJ5Tlg4am9KWXF6MGVCYmd3bEkxdHNabzZGZjZfRktJNkJ2QkFWdkpfSHlVZUFHc20tS1N5a2lWVHl6YllrV2l5VWhQRzM1Z0hMYnlsdkVYTVdmN2JqX1Zka1ZtVHdzSzZfdk4yQjJ6UG9leFU4SjVVV2FMVG1rejVHaDlHd0pVbjF4cVMxUUsxUmkxQXV3ZllCUHVLeldjT3dYQnlCMzZLU3RiU2xqdlNrQTFqaG5iUnhiaDFTeFNzc3VZcHJNVGRxU3FSRDFfOGZYc2V1Qk5RVXpFRFFBR1VLbFkwMEYxa2RMSVR1RnpQWXNnYU1zZ3hyRTRkdXZGMDNRTDJ0dDBwQXF4a1c0aFhiQVdaNllraUUyWmhkZUpObFJsdlFxeTNqWWRsRzFfRFNtS3NkOWV6WjBFRGtCUTIzUVBkQVBUWUJMM19ZMTVORmw1dGkzVVctVlhnSUtVcC1nRU8xWjgwOENFdDNDLUE3cWhzcTBjb2tjTjRMN1QxVFplc3JxMzhJbVA3T3JLTGhQeDVzcTFmdGZmWFBBazBJRzdUMVZFVVQxa1NPOHJLM1FPQk1RazNpZGY3WnRZTXdhSENRN0pHMjlFQVBodlVzeXRwSzJwLVhHTzZ2YU9mbi1sZ2lqVkdOdHEzXzlTdnVaa012cXhCaDZpdVdwblZWdG5rQUpiRm1RdDhSRzRMV2F1bDVJNW0yZHlUMHFaRmw5enhUWHZpZTBUTUotUUNVMFlDbEZLQzJmTkNBc3lLMkROdEN2alg5bkk0SjVSQlpENTlvaFdSeTVtQnpNeWRXLVNuZzNnWGdxYU9Yb1BiRDZWVW03VlF3dGMxU2tYOW9BeDNQWEtHcGdpWTV6LTJiMWw3cGRINjV0NzlVbXViWk85andVWlQwZkV1WFRjTDVRSS1TQXBrOTRLR21qSW5KZjQxUDB6Ty1DelpwUllwNU42VEZYV25jRDNZdHpXS254WDgzU1lsNkdHRFI0ZjZ2ZnBSdWZDd3pLT196RVJGaHlLZU5RSUc3WGpiNXhUVFNhUkFWNVQ5akF5aHVtUW55TTkwQzJDOS1HME9fYzVQZDB0NUtSa25sLVYxZjRObURLNVhyY0stdTF0ZnlRYXBXZU5hTF81WlNCUFRFNWpQNHFlb2xVRzNfLWxiOW52Q2NtQlV0c3R5Skt5V0U5MW1wdm9MQ3ZCMW43RjZqZDJFOXdGT1hITmsyWHZFcW1rTVotd3FQTHZzQ1B2SnBBQmtaVmF4VFNnenVobFUyZ2J5cWs4MXFkOUpESlNHQUtpaXZrdGM0ZzB2Z1h3VnFLbnpQb09WVlB1OUZDZ0NwMVpCbjhGbWFLbGV6ZEdZSkJCSEhMZS01Y01RZk1FQzloNnhQRHpPcEZZeDBCa3FGSXVtNVdXaG5EX2tFU3FiX1gwX0tiejJPSDhlN0p1OVVtMXRfQ3otN1VJX29WNFJ2d1p5TEFHSkYyV1JxQlpLMjc5MjFTbTR4c3l0ZjdMT3FPWVNOZFlSN3pKMHZMX1BzNEVhZ0tGZ1pzS19qX1VCMzdJeHNLeVktT2p1X20wQUEzangxQXNqTk13UnpvQ3BDUUhXd0JoSi1BME05SjJwZ0hINFdTMjU5Rjl6bXRHejlNUE1qS1dSa292VFB3dEZiR1FSaV9DcHNUUjc1d2JpYi1RNlJrNzlvMGlOMURPdkNoejVUR0NZejM1MWFKNUcyM2Zxc2taNkhYSmdsMjRqS1c4cWszOHA0WnJoWGZLekQyU3F2dnZLQ1REV0F0TzdlenJnNFZXMGpvZk9DdmJpUDhjbGF5M2RQVkN5REhmV1FLcDNIaDRlczUyR2VCX3gzRWlfMXhYTFFvelVfS2t6VUttNkxLcFNRQ3o0emdtREI2dEVOUThFcUQ3QU55UWZNeFFodzgzdGdoZGdGWXNVQzEzZFhFWHBNdzNPY0stVVd3b1duLVM4QWxXTFdnbzRVaHlxbld5NTBWYm5fb01pcmhIT2hOdTFyR0FRWG1YTFlWclhVMmpNcU90UGZhNWlYNnFLZU5WQ1RBWDdXemNOSDRXNi1NdjQ3czVaVHFBNHItMXVsS3VjaHVBb2hKUGRSWlVKX3oyZjU5LWFJTjlwRWxTa3BraGFvNTlha0RQbno4eDNlQ250XzY1cUo5bGVGc2UyeHJnRDROQ1VwSzY5QWxkVGxsSGltcTlVVHlLTnJmakVhX1VnOXFJcjVuV1pIejAtV0h5NW5QY19ZbG8zMzM5QlVxVGt2bVFremQ4WDExUWhYSHluVFhpRWw5Ny0wc3VJeFhtXzJPYVQ5N184X29oUTM2MGpJQm9pRVUwMzhJam9qSnpYdERvT0JBMG5JdGlCTjZ3VHFxZUhHdUxvZmR1ZmI4dUUyS3pieEVITnZ6SjRzazVtV3FLLTZmRXRFYjBpSHBtZWFJaVdCXzVOdlRBUlFWNEtDTGdQLWNrTGdFX3laTHdNT1MwZG9wWXRLeHRHS1dIcE5rN0VUOHhTOFU3MTVILVJFZTAwZHlkVW8xbTBvLW1aUXd4dUNRdHNiak4tdDEwYUdEZFZiNG5obHRWbkZkWWVWV0Z1QmdtZHp4WUt1S0pBRVVyUUhLcTVua0NSbWViT2FaVmdXbF9hYjhQZ0V0S1VOUjEtTHhHczJXWGo4a2l5LXhYSFhlR0tNRmxROUh6Z0M2WmV2dEZUN3lIdmNwRFNCX2JRdzdLeUNadGVyWDFWd0ZPQTM3VXdKZTM2VGZNS3lwTTdDS0JWWUppaTQ0eEh0WGxJc2VvMjFRanJ6eVlHbzVqTlpXZV84VDZld05hQWRULThYbHJFUEtIdWl1RTJta19venFMcmVVRDVnRnhXUHI2U1gyMzhSaFVNRWVRTmFDWU9Na1RhSWdjdWxLUFJWT1M5RUJlZkdKNVF1U0RNd0lzY2pDa091blFEWEZtak1SNEhOTmN2Qm15MjdrVlE0UTR5dGxoVTFzSEFHU3hNOGViTGlMcnYxMHduNDRISTE4YTg3MGtMU3FfdjhjMnJRVVZzamY1UEVEaGtpQlEteEJzdG5KcVVUQl9jbXlwSklyaFdHa3A2dE9JTmNtTDRCSmRkUzdvX29BZHZjdmdnd3NQSzFDUktPc08tUTVybjZHbmt3RTFLaU5YVWZYdlpjb0J3WWFBX25BWV9yempkczFBM29nRzlxeVUwU2J0MmZ6YVdlSzRERlN2UGFVRDhfZEVMQVR2elIzUWlITm9xdDFuZ2FvQWR1RHB0Z0h5OFRKcmFnalhvUlBKcXA0elNabFVjS3NJQTVuT01jTndiOXQ5d1JkOHBKcGU5NmpFYWhlV3E2SUsyUG1pM2NyTGJLUDlZaGRFYjVnVDhkbXlxLjFDNUthTkJ4eHM5UWFzUGhLSTVWVm5pUF8xcm9aZWhEbWNCcHVDMU9fcmNYY1FNNThBbUZmU2luSmlScEtleDFoYVhGdzVfSzBkUDVYSHRUZk9Rckxn" /><input type="hidden" name="_eventId" value="submit" /><input type="hidden" name="geolocation" /><p class="small mb-5 pb-lg-2"><a class="text-muted" href="https://idm.fresnostate.edu/pwreset/">Forgot password?</a></p>
                                    </form>

                                </div>

                            </div>

                            <div class="d-none d-lg-block">
                                <h2>Need an Account?</h2>
                                <p>
                                    <strong>Faculty and Staff:</strong> <a href="https://idm.fresnostate.edu/signup/">
                                        Request your Fresno State email account now</a> to gain access to email, calendaring, Canvas, My Fresno State, free campus Wi-Fi access,
                                    and services only available to employees.
                                </p>

                                <p>
                                    <strong>Students:</strong> <a href="https://googleapps.fresnostate.edu/signup/">Create your Fresno State student account now</a> to gain
                                    access to Google Apps, email, your My Fresno State class schedule and registration site, Canvas online classes, free campus Wi-Fi access, and
                                    other services  available to Fresno State students. Once you create your account, you'll login to your email at
                                    <a href="http://googleapps.fresnostate.edu">http://googleapps.fresnostate.edu</a>.
                                </p>

                                <p>
                                    You can also <a href="https://googleapps.fresnostate.edu/mobilepassword/">set up mobile access</a> to your Google Apps at Fresno State account.
                                </p>

                                <h2>Having Trouble?</h2>
                                <p>
                                    Get online help with <a href="http://fresnostate.edu/help/students/gmail/">Google Apps</a> and <a href="http://fresnostate.edu/help/">other topics</a>
                                    through the Service Desk.
                                </p>
                            </div>
                        </div> </div> </div>
            </div>

        </>
    );
}

export default Login;
