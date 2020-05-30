var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hoangnv20081998@gmail.com',
    pass: 'hoangtoni11'
  }
});
// console.log(transporter);
// console.log(typeof transporter);

var mailOptions = {
  from: 'hoangnv20081998@gmail.com',
  to: 'hoangnv20081998@gmail.com, hoangtoni11@icloud.com, hoang.nv.58cntt@ntu.edu.vn',
  subject: 'Sending Email using Node.js by HoangNguyen title test multiple email',
  // text: 'Tôi sẽ là người giỏi nhất ...! descriptions ...'
  html: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PERC Pataday Launch</title>
    <style type="text/css">
        table {
            border-spacing: 0 !important;
            table-layout: auto;
            margin: 0 auto;
        }

        /* CUSTOM - CSS */
        .display-mobile {
            display: none !important;
        }

        table tr td table tr td table tr td table tr td a:link {
            mso-style-priority: 99;
            color: #58595b !important;
            text-decoration: none !important;
        }

        td {
            padding: 0px;
        }

        /*Responsive*/
        @media only screen and (max-width: 599px) {

            /* CUSTOM - CSS */
            table {
                width: 100% !important;
            }

            img {
                /* width: auto !important; */
                max-width: 100% !important;

            }

            .width_img {
                width: auto !important;
            }

            .display-mobile {
                display: table-row !important;
            }

            .display-desktop {
                display: none !important;
            }

            .crop-banner {
                padding: 0 !important;
                margin: 0 !important;
                line-height: 0 !important;
            }

            .fs-m-18 {
                font-size: 18px !important;
            }

            .lh-m-18-02 {
                line-height: 18px !important;
            }

            .fs-m-22 {
                font-size: 22px !important;
            }

            .fs-m-20 {
                font-size: 20px !important;
            }

            .fs-m-14 {
                font-size: 14px !important;
            }

            .fs-m-13 {
                font-size: 13px !important;
            }

            .w-m-5 {
                width: 5% !important;
            }

            .w-m-20px {
                width: 20px !important;
            }

            .text-m-center tr td {
                text-align: center !important;
            }

            .w-m-10 {
                width: 10px !important;
            }

        }

        @media only screen and (max-width: 479px) {

            /* CUSTOM - CSS */
            u+.body .full {
                width: 100% !important;
                /* width: 100vw !important; */
            }

            body {
                width: auto !important;
                font-family: Arial, Sans-serif !important;
            }

            u+.body {
                width: 100% !important;
                /* width: 100vw !important; */
            }

            .fs-m-15-c2 {
                font-size: 15px !important;
            }
        }

        u+.body .crop-banner {
            padding: 0 !important;
            margin: 0 !important;
            line-height: 0 !important;
        }
    </style>


</head>

<body
    style="margin: 0; margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; background-color: #ffffff; color: #000000;"
    offset="0" class="body">
    <table width="600" style="width: 600px; background-color: #ffffff;" align="center" cellspacing="0"
        border-spacing="0" cellpadding="0" class="full">

        <tr>
            <td style="padding: 0px; margin: 0px; line-height: 0px;" class="crop-banner">
                <img width="600" style="width: 600px;" class="width_img"
                    src="https://email.carbon8.info/alcon-03022020/images/banner_perc2.png"
                    alt="IDOC independent. together, ALcon, Together. For Practice Growth.">
            </td>
        </tr>

        <!-- tr-1 -->

        <tr>
            <td style="background-color: #0099cc;">
                <table cellspacing="0" border-spacing="0" cellpadding="0">
                    <tr>
                        <td height="7"
                            style="height: 7px; line-height: 0px; font-size: 0px; background-color: #0099cc;">&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td width="10px" style="width: 10px; line-height: 0px; font-size: 0px;">&nbsp;
                        </td>
                        <td style="text-align: center; font-size: 23px; font-family: Arial, Sans-serif; color: #ffffff;"
                            class="fs-m-18 fs-m-15-c2 lh-m-18-02">
                            <i style="white-space: nowrap;">NOW AVAILABLE WITHOUT A PRESCRIPTION</i>
                        </td>
                        <td width="10px" style="width: 10px; line-height: 0px; font-size: 0px;">&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td height="7"
                            style="height: 7px; line-height: 0px; font-size: 0px; background-color: #0099cc;">&nbsp;
                        </td>
                    </tr>
                </table>
            </td>
        </tr>


        <!-- tr-2 -->
        <tr>
            <td style="padding: 0px; margin: 0px; line-height: 0px;">
                <img width="600" style="width: 600px;"
                    src="https://email.carbon8.info/alcon-03042020/images/banner.jpg?ver=1" class="width_img"
                    alt="Pataday® with the #1 Prescribed Eye Allergy Itch Relief Ingredient, Fast-Acting, Long-Lasting">
            </td>
        </tr>


        <!-- tr-3 -->
        <tr>
            <td style="background-color: #e6f8fd;">
                <table cellspacing="0" border-spacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                        <td width="14%" style="width: 14%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                        <td align="center">
                            <table cellspacing="0" border-spacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <table cellspacing="0" border-spacing="0" cellpadding="0">
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: center; font-size: 34px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;"
                                                    class="fs-m-22">
                                                    A Change for the Better
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: center; font-size: 15px; font-family: Arial, Sans-serif; color: #000000;"
                                                    class="fs-m-14">
                                                    Pataday<sup style="font-size: 10px;">&reg;</sup>, with olopatadine,
                                                    the
                                                    <strong>#1 prescribed eye allergy itch relief ingredient<sup
                                                            style="font-size: 10px;">1</sup></strong>, can now be
                                                    purchased <strong>without a prescription.</strong>
                                                    That&#39;s a good change.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <img width="75" style="width: 75px;"
                                                        src="https://email.carbon8.info/alcon-03042020/images/forYourPatients.png"
                                                        alt="For your patients">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="text-align: center; font-size: 20px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;">
                                                    For your patients
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: center; font-size: 15px; font-family: Arial, Sans-serif; color: #000000;"
                                                    class="fs-m-14">
                                                    It means the fast-acting<sup style="font-size: 10px;">2</sup>,
                                                    long-lasting<sup style="font-size: 10px;">3</sup> allergy remedy
                                                    that&#39;s been
                                                    prescribed over 40 million times since 2008<sup
                                                        style="font-size: 10px;">4*</sup>, is available day or
                                                    night and online.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <img width="75" style="width: 75px;"
                                                        src="https://email.carbon8.info/alcon-03042020/images/forYourPractice.png"
                                                        alt="For your practice">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="text-align: center; font-size: 20px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;">
                                                    For your practice
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: center; font-size: 15px; font-family: Arial, Sans-serif; color: #000000;"
                                                    class="fs-m-14">
                                                    It means you can confidently recommend a proven, OTC antihistamine
                                                    providing eye allergy itch relief for as long as 16 hours.<sup
                                                        style="font-size: 10px;">3</sup> And
                                                    enhance your patient relationships by doing so!
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <a href="#" title="PatadayFaq" target="_blank">
                                                        <img width="160" style="width: 160px;"
                                                            src="https://email.carbon8.info/alcon-03042020/images/buttonPatadayFaq.png"
                                                            alt="Pataday Faq">
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="14%" style="width: 14%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">&nbsp;</td>
        </tr>

        <!-- tr-4 -->
        <tr>
            <td align="center">
                <table cellspacing="0" border-spacing="0" cellpadding="0" style="width: auto !important;">
                    <tr>
                        <td style="text-align: center; font-size: 23px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;"
                            class="fs-m-20">
                            Product Details
                        </td>
                    </tr>
                    <tr>
                        <td height="5" style="height: 5px; line-height: 0px; font-size: 0px; border-bottom: 2px solid;">
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td height=" 25" style="height: 25px; line-height: 0px; font-size: 0px;">&nbsp;</td>
        </tr>

        <!-- tr-5-new -->
        <tr>
            <td>
                <table cellspacing="0" border-spacing="0" cellpadding="0" style="margin: 0px; padding: 0px;"
                    width="100%" style="width: 100%;">
                    <tr>
                        <td width="100" style="width: 100px; line-height: 0px; font-size: 0px;" class="w-m-10">&nbsp;
                        </td>


                        <td width="400" style="width: 400px; vertical-align: top;" class="text-m-center">
                            <table width="100%" style="width: 100%;">
                                <tr>
                                    <td>
                                        <table width="20%" style="width: 20%;" align="left">
                                            <tr>
                                                <td>
                                                    <img width="95" style="width: 95px;"
                                                        src="https://email.carbon8.info/alcon-03042020/images/patadayOnce.jpg"
                                                        alt="Pataday® Once Daily Relief">
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="70%" style="width: 70%;" align="right">
                                            <tr>
                                                <td
                                                    style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; line-height: 16px">
                                                    <table cellspacing="0" border-spacing="0" cellpadding="0"
                                                        width="100%" style="margin: 0px; width: 100%;">
                                                        <tr>
                                                            <td height="15"
                                                                style="height: 15px; line-height: 0px; font-size: 0px;">
                                                                &nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 17px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000; line-height: 17px;">
                                                                Pataday<sup style="font-size: 10px;">&reg;</sup> Once
                                                                Daily Relief
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="10"
                                                                style="height: 10px; line-height: 0px; font-size: 0px;">
                                                                &nbsp;</td>
                                                        </tr>



                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Reduces eye
                                                                    itch</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Contains 0.2%
                                                                    olopatadine</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Works with just one
                                                                    drop, once per day</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Is effective for up
                                                                    to 16 hours</span></td>
                                                        </tr>



                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="100" style="width: 100px; line-height: 0px; font-size: 0px;" class="w-m-10">&nbsp;
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">&nbsp;</td>
        </tr>

        <!-- tr-6-new -->
        <tr>
            <td>
                <table cellspacing="0" border-spacing="0" cellpadding="0" style="margin: 0px; padding: 0px;"
                    width="100%" style="width: 100%;">
                    <tr>
                        <td width="100" style="width: 100px; line-height: 0px; font-size: 0px;" class="w-m-10">&nbsp;
                        </td>


                        <td width="400" style="width: 400px; vertical-align: top;" class="text-m-center">
                            <table width="100%" style="width: 100%;">
                                <tr>
                                    <td>
                                        <table width="20%" style="width: 20%;" align="left">
                                            <tr>
                                                <td>
                                                    <img width="95" style="width: 95px;"
                                                        src="https://email.carbon8.info/alcon-03042020/images/patadayTwice.jpg"
                                                        alt="Pataday® Once Daily Relief">
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="70%" style="width: 70%;" align="right">

                                            <tr>
                                                <td
                                                    style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; line-height: 16px">
                                                    <table cellspacing="0" border-spacing="0" cellpadding="0"
                                                        width="100%" style="margin: 0px; width: 100%;">
                                                        <tr>
                                                            <td height="15"
                                                                style="height: 15px; line-height: 0px; font-size: 0px;">
                                                                &nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 17px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000; line-height: 17px;">
                                                                Pataday<sup style="font-size: 10px;">&reg;</sup> Once
                                                                Daily Relief
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="10"
                                                                style="height: 10px; line-height: 0px; font-size: 0px;">
                                                                &nbsp;</td>
                                                        </tr>




                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Reduces
                                                                    eye itch and redness</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Contains
                                                                    0.1% olopatadine</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Can be used
                                                                    twice
                                                                    per day</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                style="font-size: 14px; font-family: Arial, Sans-serif; color: #000000; vertical-align: middle; line-height: 18px;">
                                                                <span style="font-size: 10px;">&#9679;</span>&nbsp;<span
                                                                    class="display-desktop">&nbsp;&nbsp;</span><span
                                                                    style="vertical-align: middle;">Is
                                                                    effective for up to 8 hours</span></td>
                                                        </tr>


                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="100" style="width: 100px; line-height: 0px; font-size: 0px;" class="w-m-10">&nbsp;
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td height="35" style="height: 35px; line-height: 0px; font-size: 0px;">&nbsp;</td>
        </tr>

        <!-- tr-7 -->
        <tr>
            <td>
                <table cellspacing="0" border-spacing="0" cellpadding="0" style="width: 100%;">
                    <tr>
                        <td width="19%" style="width: 19%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                        <td style="width: 65px;">
                            <img width="65" style="width: 65px;"
                                src="https://email.carbon8.info/alcon-03042020/images/advisePatients.png"
                                alt="Advise patients to remove contact lenses  before using Pataday® and then wait at least 10 minutes before reinserting lenses.">
                        </td>
                        <td width="15" style="width: 15px; line-height: 0px; font-size: 0px;">&nbsp;</td>
                        <td style="font-size: 15px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;"
                            class="fs-m-13">
                            <i>
                                Advise patients to remove contact lenses before using Pataday<sup
                                    style="font-size: 10px;">&reg;</sup> and then wait at least 10
                                minutes before reinserting lenses.
                            </i>
                        </td>
                        <td width="15%" style="width: 15%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">&nbsp;</td>
        </tr>

        <!-- tr-8 -->
        <tr>
            <td style="background-color: #e6f8fd;">
                <table cellspacing="0" border-spacing="0" cellpadding="0">
                    <tr>
                        <td width="15%" style="width: 15%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                        <td>
                            <table cellspacing="0" border-spacing="0" cellpadding="0">
                                <tr>
                                    <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center; font-size: 26px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;"
                                        class="fs-m-18">
                                        Just in Time for Allergy Season &ndash; Fast Relief That Lasts All Day
                                    </td>
                                </tr>
                                <tr>
                                    <td height="15" style="height: 15px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellspacing="0" border-spacing="0" cellpadding="0">
                                            <tr>
                                                <td width="5%" style="width: 5%; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                                <td style="text-align: center; font-size: 14px; font-family: Arial, Sans-serif; color: #000000; line-height: 18px;"
                                                    class="fs-m-13">
                                                    Pataday<sup style="font-size: 10px;">&reg;</sup> will be
                                                    available
                                                    over the
                                                    counter beginning in March, right when
                                                    allergy season
                                                    starts in some parts of the U.S. But offering a
                                                    &quot;drop of good
                                                    advice&quot; now can
                                                    help you be
                                                    recognized as a trusted advisor year &#39;round!
                                                </td>
                                                <td width="5%" style="width: 5%; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="20" style="height: 20px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center; font-size: 15px; font-family: Arial, Sans-serif; color: #000000;"
                                        class="fs-m-14">
                                        <i>Contact your Alcon Account Manager for additional details</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" border-spacing="0" cellpadding="0">
                                            <tr>
                                                <td style="width: 50px;">
                                                    <img width="50" style="width: 50px;"
                                                        src="https://email.carbon8.info/alcon-03042020/images/leftRed.png?ver=1"
                                                        alt="left Red">
                                                </td>
                                                <td width="10" style="width: 10px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                                <td style="text-align: center; font-size: 15px; font-weight: bold; font-family: Arial, Sans-serif; color: #000000;"
                                                    class="fs-m-13">
                                                    Find Pataday<sup style="font-size: 10px;">&reg;</sup>
                                                    Once Daily
                                                    Relief and Pataday<sup style="font-size: 10px;">&reg;</sup> Twice
                                                    Daily Relief Eye
                                                    Drops in the
                                                    eye care and/or allergy aisle.
                                                </td>
                                                <td width="10" style="width: 10px; line-height: 0px; font-size: 0px;">
                                                    &nbsp;</td>
                                                <td style="width: 50px;">
                                                    <img width="50" style="width: 50px"
                                                        src="https://email.carbon8.info/alcon-03042020/images/rightBlue.png?ver=1"
                                                        alt="right Blue">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="35" style="height: 35px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                            </table>
                        </td>
                        <td width="15%" style="width: 15%; line-height: 0px; font-size: 0px;" class="w-m-5">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>


        <!-- tr-9 -->
        <tr>
            <td>
                <!-- table 4 -->
                <table cellspacing="0" border-spacing="0" cellpadding="0" width="100%" style="width: 100%;"
                    class="full">
                    <tr>
                        <td width="35" style="width: 35px; line-height: 0px; font-size: 0px;" class="w-m-20px">&nbsp;
                        </td>

                        <td>
                            <table cellspacing="0" border-spacing="0" cellpadding="0" width="100%" style="width: 100%;">
                                <tr>
                                    <td height="22" style="height: 22px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>

                                <tr>
                                    <td
                                        style="letter-spacing: -0.05px;font-size: 10px; font-family: Arial, Sans-serif; color: #58595b !important;  line-height: 12px;">
                                        * Includes prescriptions written for olopatadine 0.1% and 0.2%
                                    </td>
                                </tr>
                                <tr>
                                    <td height="10" style="height: 10px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td
                                        style="letter-spacing: -0.08px;font-size: 9px; font-family: Arial, Sans-serif; line-height: 12px; color: #58595b !important;">
                                        <strong>References: 1.</strong> Alcon data on file, 2019a.
                                        <strong>2.</strong>
                                        Alcon data on file, 2019b. <strong>3.</strong>
                                        Vogelson C, Abelson M, Pasquine T, et al. Preclinical and clinical
                                        antiallergic
                                        effect of olopatadine 0.2% solution 24 hours after topical ocular
                                        administration. <i>Allergy Asthma Proc.</i> 2004 Jan-Feb;25(1):69-75.
                                        <strong>4.</strong> Alcon data on
                                        file, 2020.
                                    </td>
                                </tr>
                                <tr>
                                    <td height="10" style="height: 10px; line-height: 0px; font-size: 0px;">
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="text-align: left;">
                                        <table cellspacing="0" border-spacing="0" cellpadding="0" width="100%"
                                            style="width: 100%;">
                                            <tr>
                                                <td
                                                    style="font-size: 8px; color: #58595b !important; line-height: 12px; font-family: Arial, Sans-serif; vertical-align: center; text-align: left;">
                                                    &copy; 2020 Alcon Inc. 02/20 US-PTD-VLC<span
                                                        style="color: #58595b !important;">-2000088</span>
                                                </td>
                                                <td width="95" style="width: 95px;">
                                                    <a href="#" title="Alcon" target="_blank">
                                                        <img width="95" style="width: 95px;"
                                                            src="https://email.carbon8.info/alcon-03042020/images/logo.png"
                                                            alt="Alcon">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            </table>
                        </td>

                        <td width="35" style="width: 35px; line-height: 0px; font-size: 0px;" class="w-m-20px">&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td height="30" style="height: 30px; line-height: 0px; font-size: 0px;">&nbsp;</td>
                    </tr>
                </table>

                <!-- end -->
            </td>
        </tr>
    </table>

    <style data-ignore-inlining>
        @media print {
            #_t {
                background-image: url('https://od1exnsi.emltrk.com/od1exnsi?p&d=%%email%%');
            }
        }

        div.OutlookMessageHeader {
            background-image: url('https://od1exnsi.emltrk.com/od1exnsi?f&d=%%email%%')
        }

        table.moz-email-headers-table {
            background-image: url('https://od1exnsi.emltrk.com/od1exnsi?f&d=%%email%%')
        }

        blockquote #_t {
            background-image: url('https://od1exnsi.emltrk.com/od1exnsi?f&d=%%email%%')
        }

        #MailContainerBody #_t {
            background-image: url('https://od1exnsi.emltrk.com/od1exnsi?f&d=%%email%%')
        }
    </style>
    <div id="_t"></div>
    <img src="https://od1exnsi.emltrk.com/od1exnsi?d=%%email%%" width="1" height="1" border="0" alt="" />
</body>

</html>
  `
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});