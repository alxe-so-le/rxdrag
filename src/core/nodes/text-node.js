
export class TextNode{
  constructor(text) {
  	this.text = text
    this.seedId()
	}
  seedId(){
    if(!TextNode.idSeed) TextNode.idSeed = 1
    TextNode.idSeed ++
    this.id = "text" + TextNode.idSeed
  }

  getParentViewDomElement(){
    return this.parent.view.$dom
  }

  render(){
    //this.view.render(this.toViewModel(), this.getParentViewDomElement())
    let parentDom = this.getParentViewDomElement()
    if(parentDom){
    	parentDom.appendChild(document.createTextNode(this.text))
    }
  }

  renderMouseFollower(parentDomElement){
    let mouseFollower = document.createTextNode(this.text)
    parentDomElement.appendChild(mouseFollower)
    return mouseFollower
  }


  refreshState(){

  }

  clearDraggedoverStates(){

  }

  clearActiveStates(){

  }

  clearFocusStates(){
  	
  }

  toTreeViewNode(){
    let view = {
      name: "TextNode",
      label: "#text",
      id: this.id,
      children: [],
    }

    return view
  }

}