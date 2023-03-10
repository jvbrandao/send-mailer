class TemplateHtml {
  async execute(subject: string, mailText: string) {
    const template = `<html>
    <head>
    <meta charset="UTF-8">
    </head>
    <body style=" border: 0; margin: 0;">
    <table width="650" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #999999; background: #EEEEEE;">
    <tr style=" height: 30px; background: #000; color: #fff; font-size: 20px; font-family: verdana; text-align: center;  ">
    <td>
    ${subject}
    </td>
    </tr>
    <tr>
    <td>
    <table width="90%" border="0" cellspacing="15" cellpadding="15" style=" background: #fff; margin-left: 5%; margin-top: 5%; margin-bottom: 5%;" >
    <tr>
    <td>
    ${mailText}
    </td>
    </tr>
    </table></td>
    </tr>
    </table>
    
    </body>
    </html> `;
    return template
  }
}

export { TemplateHtml };
