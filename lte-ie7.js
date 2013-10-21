/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'spacewalk-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'spacewalk-icon-virtual-host' : '&#xe000;',
			'spacewalk-icon-virtual-guest' : '&#xe001;',
			'spacewalk-icon-manage-autoinstallations' : '&#xe002;',
			'spacewalk-icon-locked-system' : '&#xe003;',
			'spacewalk-icon-inactive-systems' : '&#xe004;',
			'spacewalk-icon-unknown-system' : '&#xe005;',
			'spacewalk-icon-health' : '&#xe006;',
			'spacewalk-icon-Unentitled' : '&#xe007;',
			'spacewalk-icon-system-groups' : '&#xe008;',
			'spacewalk-icon-health-unknown' : '&#xe009;',
			'spacewalk-icon-software-crashes' : '&#xe00a;',
			'spacewalk-icon-health-pending' : '&#xe00b;',
			'spacewalk-icon-enhancement' : '&#xe00c;',
			'spacewalk-icon-software-channels' : '&#xe00d;',
			'spacewalk-icon-Software-Channel-Management' : '&#xe00e;',
			'spacewalk-icon-download-csv' : '&#xe00f;',
			'spacewalk-icon-custom-system-info' : '&#xe010;',
			'spacewalk-icon-register-system' : '&#xe011;',
			'spacewalk-icon-patches' : '&#xe012;',
			'spacewalk-icon-configure-suse-manager' : '&#xe013;',
			'spacewalk-icon-autoinstalling' : '&#xe014;',
			'spacewalk-icon-clone-patches' : '&#xe015;',
			'spacewalk-icon-autoinstallations' : '&#xe017;',
			'spacewalk-icon-organization-trust' : '&#xe018;',
			'spacewalk-icon-package-search' : '&#xe016;',
			'spacewalk-icon-packages' : '&#xe019;',
			'spacewalk-icon-monitoring-status' : '&#xe01a;',
			'spacewalk-icon-manage-software-packages' : '&#xe01b;',
			'spacewalk-icon-manage-patches' : '&#xe01c;',
			'spacewalk-icon-manage-entitlements-subscriptions' : '&#xe01d;',
			'spacewalk-icon-manage-configuration-files' : '&#xe01e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/spacewalk-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};