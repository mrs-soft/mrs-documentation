Map
===

..	code-block:: typescript
	
	function hook(item) {
	    const { id, name, isFolder } = item;
	    return {
	        id,
	        isFolder,
	        title: {
	            value: name,
	        },
	        icon: {
	            value:  isFolder ? "Folder" : "More",
	            color: "info.main",
	        },
	        parentId: item?.parent_id,
	    };
	}

