import {Expect, AsyncTest, TestFixture, TestCase, AsyncSetup, AsyncTeardown, Timeout} from 'alsatian'
import {nopodofo, NPDFName} from '../../'
import {join} from "path"

@TestFixture('Acro Form')
export class FormSpec {

    @AsyncTest('text field custom AP')
    public async memDocTextFieldAP() {
        return new Promise((resolve, reject) => {
            const doc = new nopodofo.Document()
            doc.load(join(__dirname, '../test-documents/test.pdf'), err => {
                if (err) Expect.fail(err.message)
                const p1 = doc.getPage(0)
                const field = p1.getField<nopodofo.TextField>(0)
                const value = 'TESTING'
                field.text = value
                const painter = new nopodofo.Painter(doc)
                const xRect = new nopodofo.Rect(0, 0, field.widgetAnnotation.rect.width, field.widgetAnnotation.rect.height)
                const xobj = doc.createXObject(xRect)
                painter.setPage(xobj)
                painter.setClipRect(xRect)
                painter.save()
                const black = new nopodofo.Color(1.0, 1.0, 1.0)
                painter.setColor(black)
                painter.restore()
                const firaCode = doc.createFont({
                    fontName: 'Fira Code',
                    fileName: join(__dirname, '../test-documents/FiraCode_Regular.ttf'),
                    bold: false,
                    embed: true
                })
                firaCode.size = 12
                painter.font = firaCode
                painter.beginText({x: 0, y: 5})
                painter.setStrokeWidth(20)
                painter.addText(value)
                painter.endText()
                painter.finishPage()
                field.readOnly = true
                const apDict = new nopodofo.Dictionary()
                apDict.addKey(NPDFName.N, xobj.reference)
                field.AP = apDict
                const daStr = `0 0 0 rg /${firaCode.identifier} tf`
                field.DA = daStr
                const tmp = join(__dirname, '../tmp/form_ap_test.pdf')
                doc.write(tmp, err => {
                    if (err) {
                        return reject(err)
                    }
                    const td = new nopodofo.Document()
                    td.load(tmp, e => {
                        if(e) return reject(e)
                        const tf = td.getPage(0).getField<nopodofo.TextField>(0)
                        Expect(tf.DA).toEqual(daStr)
                        return resolve()
                    })
                })
            })
        })
    }
}