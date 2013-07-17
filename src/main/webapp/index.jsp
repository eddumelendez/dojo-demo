<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set value="//ajax.googleapis.com/ajax/libs/dojo/1.9.0" var="dojo_url" />
<c:url value="/js/src.js" var="src_url" />
<html>
<head>
<link rel="stylesheet"
	href="${dojo_url}/dijit/themes/claro/document.css" />
<link rel="stylesheet" href="${dojo_url}/dijit/themes/claro/claro.css" />
<script type="text/javascript" src="${dojo_url}/dojo/dojo.js"
	charset="utf-8" data-dojo-config="parseOnLoad: false"></script>
<script type="text/javascript" src="${src_url}" charset="utf-8"></script>
</head>
<body>
	<div id="dialog" data-dojo-type="dijit.Dialog">
		This is a dialog
	</div>
	<form action="">
		<label>Username</label> <input type="text" data-dojo-type="dijit/form/TextBox"/>
		<label>Firstname</label> <input type="text" data-dojo-type="dijit/form/TextBox"/>
		<label>Lastname</label> <input type="text" data-dojo-type="dijit/form/TextBox"/>
		<select data-dojo-type="dijit/form/ComboBox">
			<option value="Item 1" selected="true">Item 1</option>
			<option value="Item 2">Item 2</option>
			<option value="Item 3">Item 3</option>
		</select>
		<button data-dojo-type="dijit/form/Button" onclick="dijit.byId('dialog').show()">Simple</button>
	</form>
</body>
</html>
