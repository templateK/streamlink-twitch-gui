// not a real task, just a config that gets referenced in other tasks
// see the dist and shell task configs
module.exports = {
	linux32: {
		image: "ghcr.io/streamlink/appimage-buildenv-i686",
		digest: "sha256:cebe6266fee12cf5e64dbf7324bdf358cd1b97ff647d16e818ea66342d8c9ea4",
		arch: "i686",
		input: "<%= dir.releases %>/<%= package.name %>/linux32",
		output: "<%= dir.dist %>/<%= package.name %>-<%= version %>-i686.AppImage"
	},
	linux64: {
		image: "ghcr.io/streamlink/appimage-buildenv-x86_64",
		digest: "sha256:bd6d8c4a945e108e4d9198a551e2c7aaeb44995ddb1780bc2aa3f25636e47606",
		arch: "x86_64",
		input: "<%= dir.releases %>/<%= package.name %>/linux64",
		output: "<%= dir.dist %>/<%= package.name %>-<%= version %>-x86_64.AppImage"
	}
};
