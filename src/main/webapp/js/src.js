dojo.require("dojo.parser");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojo.data.ItemFileWriteStore");
dojo.require("dijit.Dialog");
dojo.require("dijit.form.Form");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.TextBox");
dojo.require("dijit.form.ValidationTextBox");
dojo.require("dijit.form.ComboBox");
dojo.require("dijit.form.FilteringSelect");
dojo.require("dijit.form.CheckBox");
dojo.require("dijit.form.RadioButton");
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.CurrencyTextBox");
dojo.require("dijit.form.NumberSpinner");
dojo.require("dijit.form.Textarea");
dojo.require("dijit.form.Button");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dijit.layout.AccordionPane");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dojox.layout.ExpandoPane");
dojo.require("dojox.grid.EnhancedGrid");
dojo.require("dojox.grid.enhanced.plugins.Pagination");
dojo.require("dojox.grid.enhanced.plugins.Filter");
dojo.require("dojox.grid.enhanced.plugins.IndirectSelection");

dojo.addOnLoad(function() {	
	dojo.addClass(dojo.body(), "claro");
});

var endLoading = function(){
	dojo.fadeOut({
		node:"loadingOverlay",
		onEnd:function(){
			dojo.style("loadingOverlay", "display", "none");
		}
	}).play();
};
	
var plugins = {
	pagination: {
		pageSizes: [10, 25, 50, 100, Infinity],
		description: true,	
		sizeSwitch: true,	
		pageStepper: true,	
		gotoButton: true,	
		maxPageStep: 10,	
		position: "bottom",	
		defaultPage: 1, 	 
		defaultPageSize: 10 
	},
	filter: {
        closeFilterbarButton: false,
        ruleCount: 5,
        itemsName: "items"
    },
    indirectSelection: {
    	headerSelector:true, width:"40px", styles:"text-align: center;"
    }
};

var myFormatters = {
   formatLink : function(value, index) {
        return "<a href='#'>" + value + "</a>";
   }
};

function openDialog(id) {
	dijit.byId(id).show();	
}