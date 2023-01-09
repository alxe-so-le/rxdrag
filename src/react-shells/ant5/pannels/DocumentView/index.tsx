import { Divider } from "antd"
import { useToken } from "antd/es/theme/internal"
import { IDocument } from "core"
import { IframeCanvas } from "core-react/canvas/IframeCanvas"
import { IframeCanvas2 } from "core-react/canvas/IframeCanvas/index2"
import { DocumentRoot } from "core-react/DocumentRoot"
import { JsonView } from "core-react/JsonView"
import { Preview } from "core-react/Preview"
import { memo } from "react"
import { CanvasToolbar } from "react-shells/ant5/layouts/CanvasToolbar"
import { AuxButtionsButtions } from "react-shells/ant5/widgets/AuxButtions"
import { CanvasSize } from "react-shells/ant5/widgets/CanvasSize"
import { NavbarWidget } from "react-shells/ant5/widgets/NavbarWidget"
import { SelectionButtions } from "react-shells/ant5/widgets/SelectionButtions"
import { UndoRedoButtons } from "react-shells/ant5/widgets/UndoRedoButtons"
import { ViewButtons } from "react-shells/ant5/widgets/ViewButtons"
import { Viewport } from "../Viewport"

export const DocumentView = memo((
  props: {
    doc?: IDocument,
    renderUrl: string,
  }
) => {
  const { doc, renderUrl } = props
  const [, token] = useToken()
  return (
    doc ?
      <DocumentRoot doc={doc}>
        <CanvasToolbar>
          <UndoRedoButtons />
          <Divider type="vertical" style={{ height: 16 }} />
          <SelectionButtions />
          <Divider type="vertical" style={{ height: 16 }} />
          <AuxButtionsButtions />
          <Divider type="vertical" style={{ height: 16 }} />
          <CanvasSize />
          <div style={{ flex: 1 }}></div>

          <ViewButtons />
        </CanvasToolbar>
        <Viewport>
          <JsonView />
          <IframeCanvas2 doc={doc} renderUrl={renderUrl} />
          <Preview backgroundColor={token.colorBgBase} />
        </Viewport>
        <NavbarWidget />
      </DocumentRoot>
      : <></>
  )
})