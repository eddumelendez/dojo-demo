package la.doosoft.dojo.model;

import java.io.Serializable;
import java.util.List;

public class Combo implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String identifier;
	
	private List<?> items;

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public List<?> getItems() {
		return items;
	}

	public void setItems(List<?> items) {
		this.items = items;
	}

}
